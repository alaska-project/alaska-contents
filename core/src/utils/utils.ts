
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export function randomId() {
  return Math.random().toString(36).substr(2, 9);
}

export function getMediaType(url: string){
  if(/\.(jpg|jpeg|png|bmp|tiff|)$/i.test(url)){
    return 'image';
  } else if(/\.(avi|mp4|mpeg|mpg|mov|wmv|wma)$/i.test(url)){
    return 'video';
  } else {
    return 'unknown';
  }
}

export function getExtension(url: string){
  return /\.([A-Za-z0-9]+?)$/.exec(url)[1];
}
