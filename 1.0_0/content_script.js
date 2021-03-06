walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;

    //v = v.replace(/\relpace_me\b/g, "with_me");

    v = v.replace(/\bTed Cruz\b/g, "Grandpa Munster");
    v = v.replace(/\bTed cruz\b/g, "Grandpa Munster");
    v = v.replace(/\bted cruz\b/g, "Grandpa Munster");
    v = v.replace(/\bted Cruz\b/g, "Grandpa Munster");

	v = v.replace(/\bcruz\b/g, "Munster");
    v = v.replace(/\bCruz\b/g, "Munster");
	
    textNode.nodeValue = v;
}




