import {useState} from 'react'

interface props {
    children: string;
    expandTextCount?: number;
}
const ExpandableText = ({children, expandTextCount = 100}: props) => {
    const [isExpanded, setIsExpanded] = useState(false); 

    if (children.length <= expandTextCount) return <p>{children}</p>;
    
    const text = isExpanded ? children : children.substring(0,expandTextCount);

  return (
    <>
        <p>{ text } ... <button onClick={() => setIsExpanded(!isExpanded)}>{ isExpanded ? 'Less': " more" }</button> </p>
    </>
  )
}

export default ExpandableText