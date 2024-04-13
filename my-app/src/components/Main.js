import React,{useState} from 'react'

export const Main = () => {
  
  const [FormData,setFormData]= useState({
    name:"",place:"",email:"",radio:"",quali:""
  })
  
  const onchangeHandler=(e)=>{
  
    setFormData({...FormData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(FormData)

  }
    return (
    <div style={{paddingLeft:'400px'}}>
    <form onSubmit={handleSubmit} style={{border: '2px solid red',backgroundColor:'pink',marginRight:'400px',marginLeft:'100px',marginTop:'100px',marginBottom:'200px'}}>
        <label>Name:</label>
            <input type='text' name='name' value={FormData.name} onChange={onchangeHandler}/><br></br>
        <label>Place:</label>
            <input type='text' name='place' value={FormData.place} onChange={onchangeHandler}/><br></br>
        <label>Email:</label>
            <input type='email' name='email' value={FormData.email} onChange={onchangeHandler}/>
        <p>Are You a Graduate:</p>
            <input type='radio' name='radio' value={FormData.radio} onChange={onchangeHandler}/>
                <label for="yes">Yes</label>
                <input type='radio' name='radio'/>
                <label for="no">No</label><br></br>
        <label for="quali">Qualification:</label>
             <select name="quali" id="quali" value={FormData.quali} onChange={onchangeHandler}>
             <option value="mtech"aria-placeholder=''>-select-</option>
             <option value="mtech">Mtech</option>
                <option value="btech">Btech</option>
                <option value="msc">Msc</option>
                <option value="ba">BA</option>
            </select><br></br>
        <button >Submit</button>
    
</form>
</div>
  )
}
