type Props = {
  imageUrl: string;
} & React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function Avatar({ imageUrl, className, ...rest }: Props) {
  return (
    <img
      className={`w-12 h-12 rounded-[50%] object-cover ${className}`}
      src={imageUrl}
      {...rest}
    />
  );
}
