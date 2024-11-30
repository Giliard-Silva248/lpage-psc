
interface IframeProps {
  src: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  allowFullScreen?: boolean;
  loading?: "lazy" | "eager";
  referrerPolicy?: React.HTMLAttributeReferrerPolicy | undefined
}

export const Iframe: React.FC<IframeProps> = ({
  src,
  width = "350rem",
  height = "250rem",
  style = { border: "2px solid #03045E" ,borderRadius: '15px'},
  allowFullScreen = true,
  loading = "lazy",
  referrerPolicy = "no-referrer-when-downgrade"
}) => {
  return (
    <iframe
        title="mapa-google"
        src={src}
        width={width}
        height={height}
        style={style}
        allowFullScreen={allowFullScreen}
        loading={loading}
        referrerPolicy={referrerPolicy}
    ></iframe>
  );
};

export default Iframe;
