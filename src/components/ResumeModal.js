import React from "react";
import { X, Download, FileText } from "lucide-react";
import { personalData } from "../data";

export const ResumeModal = ({ isOpen, onClose }) => {
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-[#0c101b] border border-slate-200/50 dark:border-slate-800/60 rounded-3xl shadow-2xl w-full max-w-4xl h-[85vh] relative flex flex-col p-6 sm:p-8 animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200/50 dark:border-slate-800/40 shrink-0">
                    <div className="flex items-center space-x-3 text-left">
                        <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-xl text-white">
                            <FileText className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                                View Resume
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{personalData.name} | {personalData.title}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Desktop download links */}
                        <div className="hidden sm:flex items-center gap-2">
                            <a
                                href={process.env.PUBLIC_URL + personalData.resumePdf}
                                download
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-102"
                            >
                                <Download className="mr-1.5 w-3.5 h-3.5" />
                                Download PDF
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + personalData.resumeDocx}
                                download
                                className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-102"
                            >
                                <Download className="mr-1.5 w-3.5 h-3.5" />
                                Download Word
                            </a>
                        </div>

                        {/* Close button natively aligned */}
                        <button
                            onClick={onClose}
                            className="p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800 text-slate-700 dark:text-slate-350 rounded-xl hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all transform hover:scale-105"
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Body Content */}
                <div className="flex-1 mt-6 overflow-hidden relative rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
                    {/* Inline PDF Viewer for larger screens */}
                    <div className="hidden md:block w-full h-full bg-white">
                        <iframe
                            src={`${process.env.PUBLIC_URL + personalData.resumePdf}#toolbar=0`}
                            className="w-full h-full border-0 bg-white"
                            title={`${personalData.name} Resume`}
                        />
                    </div>

                    {/* Mobile fallback layout */}
                    <div className="md:hidden flex flex-col items-center justify-center text-center p-8 h-full bg-slate-50/50 dark:bg-slate-950/20 space-y-4">
                        <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white">Mobile PDF View Disabled</h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                            Mobile browsers generally do not support inline PDF viewing. Please download the document using the buttons below:
                        </p>
                        <div className="flex flex-col gap-2 w-full max-w-[200px] pt-2">
                            <a
                                href={process.env.PUBLIC_URL + personalData.resumePdf}
                                download
                                className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-bold rounded-xl shadow-md"
                            >
                                <Download className="mr-1.5 w-3.5 h-3.5" />
                                Download PDF
                            </a>
                            <a
                                href={process.env.PUBLIC_URL + personalData.resumeDocx}
                                download
                                className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-100 dark:bg-slate-900 border border-slate-200/20 dark:border-slate-800 text-slate-700 dark:text-slate-255 text-xs font-bold rounded-xl"
                            >
                                <Download className="mr-1.5 w-3.5 h-3.5" />
                                Download Word
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
