function calculation() {


    return(

        <>
        
       <div>
      
       </div>
       <div className="flex flex-row">
  <div className="bg-orange-500">Box1</div>
  <div className="bg-sky-100">Box2</div>
  <div className="bg-sky-200">Box3</div>
  <div className="bg-sky-300">Box4</div>
  <div className="bg-sky-400">Box5</div>
  <div className="bg-sky-500">Box6</div>
  <div className="bg-sky-600">Box7</div>
  <div className="bg-sky-700">Box8</div>
  <div className="bg-sky-800">Box9</div>
  <div className="bg-sky-900">Box10</div>
  <div className="bg-sky-950">Box11</div>
  <ul role="list">
  
    {/* <!-- Remove top/bottom padding when first/last child --> */}
    <li className="flex py-4 first:pt-0 last:pb-0">
      <img className="h-10 w-10 rounded-full" alt="" />
      <div className="ml-3 overflow-hidden">
        <p className="text-sm font-medium text-gray-900 dark:text-white"></p>
        <p className="truncate text-sm text-gray-500 dark:text-gray-400"></p>
      </div>
    </li>
 
</ul>

  <input type="button" value="Click Me" />
  
</div>
        
<button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
        </>
    )
}

export default calculation;