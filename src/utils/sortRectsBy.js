const sortRectsBy = (rects, sortBy, sortDirection) => {
  let sortedRects;
  const calculateArea = rect =>
    (rect.height + rect.borderSize * 2) * (rect.width + rect.borderSize * 2);
  switch (sortBy) {
    case 'size':
      sortedRects = rects.sort((a, b) => calculateArea(a) - calculateArea(b));
      break;
    case 'borderSize':
      sortedRects = rects.sort((a, b) => a.borderSize - b.borderSize);
      break;
    case 'width':
      sortedRects = rects.sort(
        (a, b) => 2 * a.borderSize + a.width - 2 * b.borderSize + b.width
      );
      break;
    case 'height':
      sortedRects = rects.sort(
        (a, b) => 2 * a.borderSize + a.height - 2 * b.borderSize + b.height
      );
      break;
    default:
      sortedRects = rects;
  }
  if (sortDirection === 'DESC') {
    return sortedRects.reverse();
  }
  return sortedRects;
};

export default sortRectsBy;
