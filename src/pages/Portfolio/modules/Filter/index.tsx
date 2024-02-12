import { useState } from 'react';
import { PortfolioItem } from '../../Portfolio';
import style from './Filter.module.scss';
import { useDispatch } from 'react-redux';
import { setCursorUpdate } from '../../../../store/loader';

type TFilterItem = {
  name: string;
  type: 'all' | 'react' | 'html' | 'best';
  onClick: () => void;
};

const Filter = ({ projectsListState, setProjectsList }: any) => {
  const [currentType, setCurrentType] = useState('all');
  const dispatch = useDispatch();

  const filtersList: TFilterItem[] = [
    {
      name: 'Все работы',
      type: 'all',
      onClick: () => {
        setCurrentType('all');
        setProjectsList(
          projectsListState
            .map((item: any, index: number) => (
              <PortfolioItem
                key={index}
                name={item.Name}
                img={item.Img}
                link={item.Link}
                isBest={item.IsBest}
                type={item.Type}
              />
            ))
            .reverse()
        );
        dispatch(setCursorUpdate());
      },
    },
    {
      name: 'Лучшие работы',
      type: 'best',
      onClick: () => {
        setCurrentType('best');
        setProjectsList(
          projectsListState
            .filter((item: any) => item.IsBest)
            .map((item: any, index: number) => (
              <PortfolioItem
                key={index}
                name={item.Name}
                img={item.Img}
                link={item.Link}
                isBest={item.IsBest}
                type={item.Type}
              />
            ))
            .reverse()
        );
        dispatch(setCursorUpdate());
      },
    },
    {
      name: 'React',
      type: 'react',
      onClick: () => {
        setCurrentType('react');
        setProjectsList(
          projectsListState
            .filter((item: any) => item.Type === 'react')
            .map((item: any, index: number) => (
              <PortfolioItem
                key={index}
                name={item.Name}
                img={item.Img}
                link={item.Link}
                isBest={item.IsBest}
                type={item.Type}
              />
            ))
            .reverse()
        );
        dispatch(setCursorUpdate());
      },
    },
    {
      name: 'HTML/CSS Верстка',
      type: 'html',
      onClick: () => {
        setCurrentType('html');
        setProjectsList(
          projectsListState
            .filter((item: any) => item.Type === 'html')
            .map((item: any, index: number) => (
              <PortfolioItem
                key={index}
                name={item.Name}
                img={item.Img}
                link={item.Link}
                isBest={item.IsBest}
                type={item.Type}
              />
            ))
            .reverse()
        );
        dispatch(setCursorUpdate());
      },
    },
  ];

  return (
    <div className={style.filter}>
      <div className={style.filter__title}>Фильтр</div>
      <div className={style.filterList}>
        {filtersList.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={`${style.filter__button} ${
              currentType === item.type && style.active
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
