import React, { Children } from 'react';

const BackroundColor = ({children}) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#050548] to-[#0d1f13] relative overflow-hidden">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {/* Page Content */}
            <div className="relative z-10 flex flex-col min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default BackroundColor;