const sortRectsBy = (rects, sortBy, sortDirection) => {
  let sortedRects;
  switch (sortBy) {
    case 'size':
      sortedRects = rects.sort((a, b) =>
        (a.height + a.borderSize * 2) * (a.width + a.borderSize * 2) >
        (b.height + b.borderSize * 2) * (b.width + b.borderSize * 2)
          ? 1
          : -1
      );
      break;
    case 'borderSize':
      sortedRects = rects.sort((a, b) =>
        a.borderSize > b.borderSize ? 1 : -1
      );
      break;
    case 'width':
      sortedRects = rects.sort((a, b) =>
        2 * a.borderSize + a.width > 2 * b.borderSize + b.width ? 1 : -1
      );
      break;
    case 'height':
      sortedRects = rects.sort((a, b) =>
        2 * a.borderSize + a.height > 2 * b.borderSize + b.height ? 1 : -1
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
