import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import { useState } from "react";
function Addproduct(){
  let [pname,setPname]=useState("")
  let [pprice,setPprice]=useState("")
  let [pimg,setPimg]=useState(null)
  let [pdetails,sePdetails]=useState("")
    return(
        <>
       <div>
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
      <Sidebar/>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
       <Top/>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-4 text-gray-800">Add Product</h1>
          <p>Product Name</p>
          <p><input type="text" onChange={(ev)=>{
            setPname(ev.target.value)
          }} className="form-control" /></p>
          <p>Product Price</p>
          <p><input type="text" onChange={(ev)=>{
            setPprice(ev.target.value)
          }} className="form-control"  /></p>
          <p>Product Image</p>
          <p><input type="file" onChange={(ev)=>{
            setPimg(ev.target.files[0])
          }} /></p>
          <p>Product details</p>
          <p><textarea onChange={(ev)=>{
            sePdetails(ev.target.value)
          }}  className="form-control"></textarea></p>
          <p><button onClick={async()=>{

            var fd=new FormData();
            fd.append("pname",pname);
            fd.append("pprice",pprice);
            fd.append("pimg",pimg);
            fd.append("pdetails",pdetails);
            var resp =await fetch("http://localhost:2000/product/add",{
              method: "POST",
              body:fd
            });
            var data = await resp.json();
            console.log(data)


            alert(pname)
          }} className="btn btn-success">Add Product</button></p>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
    <Footer/>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
 
</div>

        </>
    )
}

export default Addproduct;