/* Using destructuring props*/
export default function TabButton({children, onSelect}) {
  console.log("TabButton Executing");  
  return (
    <button onClick={onSelect}>
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