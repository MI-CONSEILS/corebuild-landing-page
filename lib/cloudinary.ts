export const cloudinaryConfig = {
  cloudName: "dkgm3e8z5",
  baseUrl: "https://res.cloudinary.com/dkgm3e8z5"
} as const;

type CloudinaryVideoAsset = {
  publicId: string;
  version: string;
  format: "mp4";
};

function getCloudinaryVideoUrl(asset: CloudinaryVideoAsset) {
  return `${cloudinaryConfig.baseUrl}/video/upload/v${asset.version}/${asset.publicId}.${asset.format}`;
}

export const cloudinaryAssets = {
  heroVideo: getCloudinaryVideoUrl({
    publicId: "WhatsApp_Video_2026-06-22_at_13.57.20_rvdmje",
    version: "1782133252",
    format: "mp4"
  })
} as const;
