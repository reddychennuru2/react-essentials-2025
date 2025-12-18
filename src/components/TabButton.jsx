/* Using destructuring props*/
export default function TabButton({children, isSelected, ...props}) {
  console.log("TabButton Executing");  
  return (
    <button className={isSelected ? 'active' : undefined} {...props}>
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