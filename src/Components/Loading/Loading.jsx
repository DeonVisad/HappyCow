import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-[#F8F9FB]">
            <div className="grid gap-2">
                <div className="flex items-center justify-center space-x-2 animate-pulse">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </div>

        </div>
    
  )
}

export default Loading