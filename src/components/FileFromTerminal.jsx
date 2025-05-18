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

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Email</th>
        <th>Address</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
      </tr>

  </tbody>
</table>
</div>
        
<button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
        </>
    )
}

export default calculation;