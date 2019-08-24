const sortRectsBy = (rects, sortBy) => {
  let sortedRects;
  switch (sortBy) {
    case 'size':
      sortedRects = rects.sort((a, b) =>
        a.height * a.width > b.height * b.width ? 1 : -1
      );
      break;
    case 'borderSize':
      sortedRects = rects.sort((a, b) =>
        a.borderSize > b.borderSize ? 1 : -1
      );
      break;
    default:
      sortedRects = rects;
  }
  return sortedRects;
};

export default sortRectsBy;
