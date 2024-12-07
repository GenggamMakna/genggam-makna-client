import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { IconUpload, IconPhoto, IconVideo } from "@tabler/icons-react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
  onError,
  currentFormat = 'image' // Default to image, but allows 'video' as well
}) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  // Supported MIME types based on current format
  const SUPPORTED_FORMATS = {
    image: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml'
    ],
    video: [
      'video/mp4',
      'video/webm',
      'video/quicktime',
      'video/x-msvideo'
    ]
  };

  const handleFileChange = (newFiles) => {
    const newFile = newFiles[0];

    // Validate file type
    if (!newFile) {
      onError && onError('No file selected');
      return;
    }

    const supportedTypes = SUPPORTED_FORMATS[currentFormat];

    // Check if file type is supported
    if (!supportedTypes.includes(newFile.type)) {
      onError && onError(`Please upload a valid ${currentFormat} file`);
      return;
    }

    // Validate file size (optional, can add size limit if needed)
    const maxSizeInBytes = 10 * 1024 * 1024; // 10MB
    if (newFile.size > maxSizeInBytes) {
      onError && onError('File size exceeds 10MB limit');
      return;
    }

    // If all validations pass
    setFile(newFile);
    onChange && onChange(newFile);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    accept: {
      [currentFormat === 'image' ? 'image/*' : 'video/*']: SUPPORTED_FORMATS[currentFormat]
    },
    onDrop: handleFileChange,
    onDropRejected: (fileRejections) => {
      const error = fileRejections[0]?.errors[0]?.message;
      onError && onError(error || 'File upload failed');
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden">
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          accept={SUPPORTED_FORMATS[currentFormat].join(',')}
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden" />
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
          <GridPattern />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p
            className="relative z-20 font-sans font-bold text-neutral-700 dark:text-neutral-300 text-base">
            Upload {currentFormat}
          </p>
          <p
            className="relative z-20 font-sans font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2">
            Drag or drop your {currentFormat} here or click to upload
          </p>
          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {file && (
              <motion.div
                key="file"
                layoutId="file-upload"
                className={cn(
                  "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-24 p-4 mt-4 w-full mx-auto rounded-md",
                  "shadow-sm"
                )}>
                <div className="flex justify-between w-full items-center gap-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs">
                    {file.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </motion.p>
                </div>

                <div
                  className="flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 ">
                    {file.type}
                  </motion.p>

                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
                    modified{" "}
                    {new Date(file.lastModified).toLocaleDateString()}
                  </motion.p>
                </div>
              </motion.div>
            )}
            {!file && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md",
                  "shadow-[0px_10px_50px_rgba(0,0,0,0.1)]"
                )}>
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-neutral-600 flex flex-col items-center">
                    Drop it
                    {currentFormat === 'image' ? (
                      <IconPhoto className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    ) : (
                      <IconVideo className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    )}
                  </motion.p>
                ) : (
                  currentFormat === 'image' ? (
                    <IconPhoto className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                  ) : (
                    <IconVideo className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
                  )
                )}
              </motion.div>
            )}

            {!file && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md"></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export function GridPattern() {
  const columns = 41;
  const rows = 11;
  return (
    <div
      className="flex bg-gray-100 dark:bg-neutral-900 flex-shrink-0 flex-wrap justify-center items-center gap-x-px gap-y-px  scale-105">
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col;
          return (
            <div
              key={`${col}-${row}`}
              className={`w-10 h-10 flex flex-shrink-0 rounded-[2px] ${index % 2 === 0
                  ? "bg-gray-50 dark:bg-neutral-950"
                  : "bg-gray-50 dark:bg-neutral-950 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]"
                }`} />
          );
        }))}
    </div>
  );
}