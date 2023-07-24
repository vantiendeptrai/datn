type BannerProps = {
  src: string;
  className: string;
};

function Banner({ src, className }: BannerProps) {
  return <img src={src} alt="" className={className} />;
}

export default Banner;
