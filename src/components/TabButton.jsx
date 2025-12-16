/* Using destructuring props*/
export default function TabButton({children, onSelect, isSelected}) {
  console.log("TabButton Executing");  
  return (
    <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
      {children}
    </button>
  );
}


/**
 export default function TabButton(props) {
    return (
        <button onClick={handleClick}>
        {props.children}
        </button>
    );
}
 */