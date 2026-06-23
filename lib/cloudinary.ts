export const cloudinaryConfig = {
  cloudName: "dkgm3e8z5",
  baseUrl: "https://res.cloudinary.com/dkgm3e8z5"
} as const;

type CloudinaryVideoAsset = {
  publicId: string;
  version: string;
  format: "mp4";
};

function getCloudinaryVideoUrl(
  asset: CloudinaryVideoAsset,
  transformation: string
) {
  return `${cloudinaryConfig.baseUrl}/video/upload/${transformation}/v${asset.version}/${asset.publicId}.${asset.format}`;
}

const heroVideoAsset = {
  publicId: "hf_20260621_130207_fce64662-c044-4b45-8116-50fc5a3ff6eb_1_xc0dae",
  version: "1782234719",
  format: "mp4"
} as const;

export const cloudinaryAssets = {
  heroVideo: getCloudinaryVideoUrl(
    heroVideoAsset,
    "f_mp4,q_auto:good,vc_h264,w_1600"
  ),
  heroVideoMobile: getCloudinaryVideoUrl(
    heroVideoAsset,
    "f_mp4,q_auto:eco,vc_h264,w_1280"
  )
} as const;
