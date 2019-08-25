import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GalleryContainer from './GalleryContainer';

configure({ adapter: new Adapter() });

describe('gallery', () => {
  const mockFunction = () => {};
  const funcProps = {
    deleteImage: mockFunction
  };
  const filterSortProps = {
    filterBy: 'borderSize',
    sortBy: 'size',
    filterMin: 0,
    filterMax: 10000,
    sortDirection: 'DESC'
  };
  const props = {
    ...funcProps,
    ...filterSortProps
  };
  const rects3 = [
    { id: '123', borderSize: 112, color: '#ff0000', height: 512, width: 11 },
    { id: '456', borderSize: 5, color: '#342f44', height: 2900, width: 8890 },
    { id: '789', borderSize: 0, color: '#442f11', height: 6127, width: 6657 }
  ];
  const rects7 = [
    ...rects3,
    { id: '12', borderSize: 12, color: '#ffffff', height: 51, width: 11 },
    { id: '1344', borderSize: 53, color: '#bbfd12', height: 2900, width: 8110 },
    { id: '145', borderSize: 11, color: '#aa3411', height: 111, width: 511 },
    { id: '4314', borderSize: 20, color: '#001122', height: 367, width: 200 }
  ];
  it('renders correct amount of rectangles', () => {
    const gallery3 = shallow(<GalleryContainer rects={rects3} {...props} />);
    const gallery7 = shallow(<GalleryContainer rects={rects7} {...props} />);
    expect(gallery3.find('.gallery-item')).toHaveLength(3);
    expect(gallery7.find('.gallery-item')).toHaveLength(7);
  });
  it('renders correctly with empty array of rectangles', () => {
    const gallery0 = shallow(<GalleryContainer rects={[]} {...props} />);
    expect(gallery0.find('.gallery-item')).toHaveLength(0);
  });
  it('renders with filtered out rectangles', () => {
    const galleryFiltered3 = shallow(
      <GalleryContainer
        rects={rects3}
        {...funcProps}
        filterMin={4}
        filterMax={115}
        filterBy="borderSize"
        sortBy="size"
        sortDirection="DESC"
      />
    );
    const galleryFiltered7 = shallow(
      <GalleryContainer
        rects={rects7}
        {...funcProps}
        filterMin={0}
        filterMax={2800000}
        filterBy="size"
        sortBy="size"
        sortDirection="DESC"
      />
    );
    expect(galleryFiltered3.find('.gallery-item')).toHaveLength(2);
    expect(galleryFiltered7.find('.gallery-item')).toHaveLength(4);
  });
});
