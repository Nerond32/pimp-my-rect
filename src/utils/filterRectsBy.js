const filterRectsBy = (rects, filterBy, min, max) => {
  if (!min && !max) {
    return rects;
  }
  let filteredRects;
  switch (filterBy) {
    case 'size':
      filteredRects = rects.filter(rect => {
        const size =
          (2 * rect.borderSize + rect.height) *
          (2 * rect.borderSize + rect.width);
        return size >= min && size <= max;
      });
      break;
    case 'borderSize':
      filteredRects = rects.filter(
        rect => rect.borderSize >= min && rect.borderSize <= max
      );
      break;
    case 'width':
      filteredRects = rects.filter(
        rect => rect.width >= min && rect.width <= max
      );
      break;
    case 'height':
      filteredRects = rects.filter(
        rect => rect.height >= min && rect.height <= max
      );
      break;
    default:
      filteredRects = rects;
  }
  return filteredRects;
};

export default filterRectsBy;
