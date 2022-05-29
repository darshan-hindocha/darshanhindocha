import Image from 'next/image';

export default function ImageWithTheme(props) {

  return (
    <Image
      alt={props.alt}
      {...props}
    />
  );
}