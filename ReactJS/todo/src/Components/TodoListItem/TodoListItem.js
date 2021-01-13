import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle, style}) => {
  const {id, text, checked} = todo;

  return (
    <div className="TodoListItem-virtualized" style={{style}}>
      <div className="TodoListItem">
        <div className={cn('checkbox', {checked})}
          onClick={() => onToggle(id)}>
          {checked? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline/>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
// React.memo는 해당 Component의 Props가 바뀌지 않으면 리렌더링 되지 않도록 설정한다. 이를 통해 함수형 컴포넌트의 리렌더링 성능을 최적화 해줄 수 있다.