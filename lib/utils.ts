import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge Tailwind and clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert any value to a JSON-parsed object
export const parseStringify = (value: unknown) =>
  JSON.parse(JSON.stringify(value));

// Convert a file to a URL
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// Convert file size from bytes to human-readable format
export const convertFileSize = (sizeInBytes: number, digits: number = 1) => {
  if (sizeInBytes < 1024) return `${sizeInBytes} Bytes`;
  if (sizeInBytes < 1024 * 1024)
    return `${(sizeInBytes / 1024).toFixed(digits)} KB`;
  if (sizeInBytes < 1024 * 1024 * 1024)
    return `${(sizeInBytes / (1024 * 1024)).toFixed(digits)} MB`;
  return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

// Calculate angle for progress indicator (2GB max storage)
export const calculateAngle = (sizeInBytes: number) => {
  const totalSizeInBytes = 2 * 1024 * 1024 * 1024; // 2GB
  return Number(((sizeInBytes / totalSizeInBytes) * 360).toFixed(2));
};

// Calculate storage percentage (2GB max storage)
export const calculatePercentage = (sizeInBytes: number) => {
  const totalSizeInBytes = 2 * 1024 * 1024 * 1024; // 2GB
  return Number(((sizeInBytes / totalSizeInBytes) * 100).toFixed(1));
};

// Get file type based on extension
export const getFileType = (fileName: string) => {
  const extension = fileName.split(".").pop()?.toLowerCase();
  if (!extension) return { type: "other", extension: "" };

  const documentExtensions = [
    "pdf",
    "doc",
    "docx",
    "txt",
    "xls",
    "xlsx",
    "csv",
    "rtf",
    "md",
  ];
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp"];
  const videoExtensions = ["mp4", "avi", "mov", "mkv", "webm"];
  const audioExtensions = ["mp3", "wav", "ogg", "flac"];

  if (documentExtensions.includes(extension))
    return { type: "document", extension };
  if (imageExtensions.includes(extension)) return { type: "image", extension };
  if (videoExtensions.includes(extension)) return { type: "video", extension };
  if (audioExtensions.includes(extension)) return { type: "audio", extension };

  return { type: "other", extension };
};

// Format ISO date to "12:00pm, 15 Jan"
export const formatDateTime = (isoString: string | null | undefined) => {
  if (!isoString) return "—";

  const date = new Date(isoString);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12;

  const time = `${hours}:${minutes.toString().padStart(2, "0")}${period}`;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${time}, ${date.getDate()} ${monthNames[date.getMonth()]}`;
};

// Get file icon based on type
export const getFileIcon = (extension: string | undefined, type: string) => {
  const fileIcons: Record<string, string> = {
    pdf: "/assets/icons/file-pdf.svg",
    doc: "/assets/icons/file-doc.svg",
    docx: "/assets/icons/file-docx.svg",
    csv: "/assets/icons/file-csv.svg",
    txt: "/assets/icons/file-txt.svg",
    xls: "/assets/icons/file-document.svg",
    xlsx: "/assets/icons/file-document.svg",
    svg: "/assets/icons/file-image.svg",
    mkv: "/assets/icons/file-video.svg",
    mov: "/assets/icons/file-video.svg",
    avi: "/assets/icons/file-video.svg",
    mp4: "/assets/icons/file-video.svg",
    mp3: "/assets/icons/file-audio.svg",
    wav: "/assets/icons/file-audio.svg",
  };

  return fileIcons[extension || ""] || `/assets/icons/file-${type}.svg`;
};

// ✅ Construct Appwrite File URL
// export const constructFileUrl = (bucketFileId: string) => {
//   if (!bucketFileId) throw new Error("Invalid bucket file ID");
//
//   const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
//   const bucket = process.env.NEXT_PUBLIC_APPWRITE_BUCKET;
//   const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
//
//   if (!endpoint || !bucket || !project)
//     throw new Error("Missing Appwrite environment variables");
//
//   const fileUrl = `${endpoint}/storage/buckets/${bucket}/files/${bucketFileId}/view?project=${project}`;
//
//   if (!/^https?:\/\//.test(fileUrl))
//     throw new Error("Invalid URL generated: " + fileUrl);
//
//   return fileUrl;
// };
//
// // ✅ Construct Appwrite Download URL
// export const constructDownloadUrl = (bucketFileId: string) => {
//   if (!bucketFileId) throw new Error("Invalid bucket file ID");
//
//   const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
//   const bucket = process.env.NEXT_PUBLIC_APPWRITE_BUCKET;
//   const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
//
//   if (!endpoint || !bucket || !project)
//     throw new Error("Missing Appwrite environment variables");
//
//   const downloadUrl = `${endpoint}/storage/buckets/${bucket}/files/${bucketFileId}/download?project=${project}`;
//
//   if (!/^https?:\/\//.test(downloadUrl))
//     throw new Error("Invalid URL generated: " + downloadUrl);
//
//   return downloadUrl;
// };
export const constructFileUrl = (bucketFileId: string) => {
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.trim();
  const bucket = process.env.NEXT_PUBLIC_APPWRITE_BUCKET?.trim();
  const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT?.trim();

  if (!endpoint || !bucket || !project) {
    throw new Error("Appwrite environment variables are missing or incorrect");
  }

  return `${endpoint}/storage/buckets/${bucket}/files/${bucketFileId}/view?project=${project}`;
};

export const constructDownloadUrl = (bucketFileId: string) => {
  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.trim();
  const bucket = process.env.NEXT_PUBLIC_APPWRITE_BUCKET?.trim();
  const project = process.env.NEXT_PUBLIC_APPWRITE_PROJECT?.trim();

  if (!endpoint || !bucket || !project) {
    throw new Error("Appwrite environment variables are missing or incorrect");
  }

  return `${endpoint}/storage/buckets/${bucket}/files/${bucketFileId}/download?project=${project}`;
};

// Dashboard Storage Summary
export const getUsageSummary = (totalSpace: any) => [
  {
    title: "Documents",
    size: totalSpace.document.size,
    latestDate: totalSpace.document.latestDate,
    icon: "/assets/icons/file-document-light.svg",
    url: "/documents",
  },
  {
    title: "Images",
    size: totalSpace.image.size,
    latestDate: totalSpace.image.latestDate,
    icon: "/assets/icons/file-image-light.svg",
    url: "/images",
  },
  {
    title: "Media",
    size: totalSpace.video.size + totalSpace.audio.size,
    latestDate: Math.max(
      totalSpace.video.latestDate,
      totalSpace.audio.latestDate,
    ),
    icon: "/assets/icons/file-video-light.svg",
    url: "/media",
  },
  {
    title: "Others",
    size: totalSpace.other.size,
    latestDate: totalSpace.other.latestDate,
    icon: "/assets/icons/file-other-light.svg",
    url: "/others",
  },
];

// File type parameters for filtering
export const getFileTypesParams = (type: string) => {
  return (
    {
      documents: ["document"],
      images: ["image"],
      media: ["video", "audio"],
      others: ["other"],
    }[type] || ["document"]
  );
};
