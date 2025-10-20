import {
	FilePenLineIcon,
	LoaderCircleIcon,
	PencilIcon,
	PlusIcon,
	TrashIcon,
	UploadCloud,
	XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import api from "../configs/api";
import pdfToText from "react-pdftotext";

const Dashboard = () => {
	const { user, token } = useSelector((state) => state.auth);

	const [allResumes, setAllResumes] = useState([]);
	const colors = ["#9333ea", "#d97706", "#dc2626", "#0284c7", "#16a34a"];
	const [showCreateResume, setShowCreateResume] = useState(false);
	const [showUploadResume, setShowUploadResume] = useState(false);
	const [title, setTitle] = useState("");
	const [resume, setResume] = useState(null);
	const [editResumeId, setEditResumeId] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const loadAllResumes = async () => {
		try {
			const { data } = await api.get("/api/users/resumes", {
				headers: { Authorization: token },
			});
			setAllResumes(data.resumes);
		} catch (error) {
			toast.error(error?.response?.data?.message || error.message);
		}
	};

	const createResume = async (e) => {
		try {
			e.preventDefault();
			const { data } = await api.post(
				"/api/resumes/create",
				{ title },
				{ headers: { Authorization: token } }
			);
			setAllResumes([...allResumes, data.resume]);
			setTitle("");
			setShowCreateResume(false);
			navigate(`/app/builder/${data.resume._id}`);
		} catch (error) {
			toast.error(error?.response?.data?.message || error.message);
		}
	};

	const uploadResume = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const resumeText = await pdfToText(resume);

			const { data } = await api.post(
				"/api/ai/upload-resume",
				{ title, resumeText },
				{ headers: { Authorization: token } }
			);

			setTitle("");
			setResume(null);
			setShowUploadResume(false);
			navigate(`/app/builder/${data.resumeId}`);
		} catch (error) {
			toast.error(error?.response?.data?.message || error.message);
		}
		setIsLoading(false);
	};

	const editTitle = async (e) => {
		try {
			e.preventDefault();
			const { data } = await api.put(
				`/api/resumes/update`,
				{ resumeId: editResumeId, resumeData: { title } },
				{ headers: { Authorization: token } }
			);
			setAllResumes(
				allResumes.map((resume) =>
					resume._id === editResumeId ? { ...resume, title } : resume
				)
			);
			setTitle("");
			setEditResumeId("");
			toast.success(data.message);
		} catch (error) {
			toast.error(error?.response?.data?.message || error.message);
		}
	};

	const deleteResume = async (resumeId) => {
		try {
			if (!window.confirm("Are you sure you want to delete this resume?"))
				return;

			const { data } = await api.delete(
				`/api/resumes/delete/${resumeId}`,
				{
					headers: { Authorization: token },
				}
			);

			setAllResumes(
				allResumes.filter((resume) => resume._id !== resumeId)
			);
			toast.success(data.message);
		} catch (error) {
			toast.error(error?.response?.data?.message || error.message);
		}
	};

	useEffect(() => {
		loadAllResumes();
	}, []);

	return (
		<div>
			<div className="max-w-7xl mx-auto px-4 py-8">
				{/* Buttons */}
				<div className="flex flex-wrap gap-5">
					<button
						onClick={() => setShowCreateResume(true)}
						className="flex-1 sm:max-w-48 h-48 bg-white flex flex-col items-center justify-center gap-3 border border-dashed border-indigo-300 rounded-xl hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-100 transition-all duration-300"
					>
						<PlusIcon className="size-12 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full p-3" />
						<p className="text-indigo-600 font-medium text-sm">
							Create Resume
						</p>
					</button>

					<button
						onClick={() => setShowUploadResume(true)}
						className="flex-1 sm:max-w-48 h-48 bg-white flex flex-col items-center justify-center gap-3 border border-dashed border-purple-300 rounded-xl hover:border-purple-500 hover:shadow-md hover:shadow-purple-100 transition-all duration-300"
					>
						<UploadCloud className="size-12 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-full p-3" />
						<p className="text-purple-600 font-medium text-sm">
							Upload Existing
						</p>
					</button>
				</div>

				<hr className="my-10 border-slate-500 w-full sm:w-[305px]" />

				<div className="gird grid-cols-2 sm:flex flex-wrap gap-4">
					{allResumes.map((resume, index) => {
						const baseColor = colors[index % colors.length];
						return (
							<div
								onClick={() =>
									navigate(`/app/builder/${resume._id}`)
								}
								key={index}
								className="relative group bg-white/20 w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
								style={{
									background: baseColor,
									backdropFilter: "blur(8px)",
									WebkitBackdropFilter: "blur(8px)",
								}}
							>
								<FilePenLineIcon
									className="size-7 group-hover:scale-105 transition-all"
									style={{ color: "white" }}
								/>
								<p
									className="text-m group-hover:scale-105 transition-all px-2 text-center font-semibold"
									style={{ color: "white" }}
								>
									{resume.title}
								</p>
								<p
									className="absolute bottom-1 text-[11px] text-slate-400 group-hover:font-bold transition-all duration-300
                px-2 text-center"
									style={{ color: "white" }}
								>
									Updated on{" "}
									{new Date(
										resume.updatedAt
									).toLocaleDateString()}
								</p>

								<div
									onClick={(e) => e.stopPropagation()}
									className="absolute top-1 right-1 group-hover:flex items-center hidden"
								>
									<TrashIcon
										onClick={() => deleteResume(resume._id)}
										className="size-7 p-1.5 hover:bg-white/50 rounded text-white transition-colors"
									/>
									<PencilIcon
										onClick={() => {
											setEditResumeId(resume._id);
											setTitle(resume.title);
										}}
										className="size-7 p-1.5 hover:bg-white/50 rounded text-white transition-colors"
									/>
								</div>
							</div>
						);
					})}
				</div>

				{showCreateResume && (
					<form
						onSubmit={createResume}
						onClick={() => setShowCreateResume(false)}
						className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
						>
							<h2 className="tex-xl font-bold mb-4">
								Create a Resume
							</h2>
							<input
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								type="text"
								placeholder="Enter resume title"
								className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600"
								required
							/>

							<button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
								Create Resume
							</button>

							<XIcon
								className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
								onClick={() => {
									setShowCreateResume(false);
									setTitle("");
								}}
							/>
						</div>
					</form>
				)}

				{showUploadResume && (
					<form
						onSubmit={uploadResume}
						onClick={() => setShowUploadResume(false)}
						className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
						>
							<h2 className="tex-xl font-bold mb-4">
								Upload Resume
							</h2>
							<input
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								type="text"
								placeholder="Enter resume title"
								className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600"
								required
							/>

							<div>
								<label
									htmlFor="resume-input"
									className="block text-sm text-slate-700"
								>
									Select resume file
									<div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
										{resume ? (
											<p>{resume.name}</p>
										) : (
											<>
												<UploadCloud className="size-14 stroke-1" />
												<p>Upload resume</p>
											</>
										)}
									</div>
								</label>

								<input
									type="file"
									id="resume-input"
									accept=".pdf"
									hidden
									onChange={(e) =>
										setResume(e.target.files[0])
									}
								/>
							</div>

							<button
								disabled={isLoading}
								className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
							>
								{isLoading && (
									<LoaderCircleIcon className="animate-spin size-4 text-white" />
								)}
								{isLoading ? "Uploading..." : "Upload Resume"}
							</button>

							<XIcon
								className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
								onClick={() => {
									setShowUploadResume(false);
									setTitle("");
								}}
							/>
						</div>
					</form>
				)}

				{editResumeId && (
					<form
						onSubmit={editTitle}
						onClick={() => setEditResumeId("")}
						className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center"
					>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
						>
							<h2 className="tex-xl font-bold mb-4">
								Edit Resume Title
							</h2>
							<input
								onChange={(e) => setTitle(e.target.value)}
								value={title}
								type="text"
								placeholder="Enter resume title"
								className="w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600"
								required
							/>

							<button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
								Update
							</button>

							<XIcon
								className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
								onClick={() => {
									setEditResumeId("");
									setTitle("");
								}}
							/>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
