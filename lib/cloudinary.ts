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
    publicId: "hf_20260621_130207_fce64662-c044-4b45-8116-50fc5a3ff6eb_1_xc0dae",
    version: "1782234719",
    format: "mp4"
  })
} as const;
