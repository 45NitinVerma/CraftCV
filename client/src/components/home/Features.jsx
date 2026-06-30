import React from 'react'
import { Zap } from 'lucide-react'
import Title from './Title';

const Features = () => {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>
      <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 border stroke-green-400 rounded-full px-6 py-1.5">
        <Zap width={14}/>
        <span>AI-Powered Process</span>
      </div>

      <Title
        title='Build & Enhance Your Resume'
        description="Create a standout professional resume effortlessly using AI-powered tools that analyze, optimize, and personalize your content in real-time."
      />

      <div className="flex flex-col md:flex-row items-center justify-center w-[60%] xl:-mt-10">
        <img className="max-w-2xl w-[60%] xl:-ml-32" src="/resume-illustration.svg" alt="AI CraftCV Builder" />
        
        <div
          className="px-4 py-12 md:px-0"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {/* AI Resume Analysis */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className={`p-6 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-violet-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" />
                <path d="M12 7v5l3 2" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">AI Resume Analysis</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Instantly analyze your resume with AI feedback on grammar, structure, and impact.
                </p>
              </div>
            </div>
          </div>

          {/* Smart Enhancement */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Smart Enhancement</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Improve phrasing, highlight achievements, and tailor resumes for any job role.
                </p>
              </div>
            </div>
          </div>

          {/* Template Customization */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <svg className="size-6 stroke-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M4 9h16M9 4v16" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Custom Templates</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Choose from modern, ATS-friendly templates and personalize with real-time previews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  )
}

export default Features
