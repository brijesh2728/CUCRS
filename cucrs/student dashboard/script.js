// Sidebar options
let dashboard=document.getElementById("link-dashboard")
let postjob=document.getElementById("link-post-job")
let applied_stud=document.getElementById("link-Applied-student")
let profile=document.getElementById("link-Profile")

// headbar heading
let head_Title=document.getElementById("head-bar-title")

// Content divs
let dashboard_content=document.getElementById("dashboard-content")
let postjob_content=document.getElementById("post-form-content")
let applied_stud_content=document.getElementById("applied-student-content")
let profile_content=document.getElementById("profile-content")
// applied student to be done
// profile to be done

// adding event listeners
dashboard.addEventListener('click',()=>{
    dashboard_content.classList.remove('disp-none')
    postjob_content.classList.add('disp-none')
    applied_stud_content.classList.add('disp-none')
    profile_content.classList.add('disp-none')
    head_Title.innerText="Dashboard"

    // Active link
    dashboard.classList.add('active')
    postjob.classList.remove('active')
    applied_stud.classList.remove('active')
    profile.classList.remove('active')

    // Remover hover
    dashboard.classList.remove('link-hover')
    postjob.classList.add('link-hover')
    applied_stud.classList.add('link-hover')
    profile.classList.add('link-hover')

})
postjob.addEventListener('click',()=>{
    dashboard_content.classList.add('disp-none')
    postjob_content.classList.remove('disp-none')
    applied_stud_content.classList.add('disp-none')
    profile_content.classList.add('disp-none')
    head_Title.innerText="Post a Job"

    // Active link
    dashboard.classList.remove('active')
    postjob.classList.add('active')
    applied_stud.classList.remove('active')
    profile.classList.remove('active')

    // Remover hover
    dashboard.classList.add('link-hover')
    postjob.classList.remove('link-hover')
    applied_stud.classList.add('link-hover')
    profile.classList.add('link-hover')

})
applied_stud.addEventListener('click',()=>{
    dashboard_content.classList.add('disp-none')
    postjob_content.classList.add('disp-none')
    applied_stud_content.classList.remove('disp-none')
    profile_content.classList.add('disp-none')
    head_Title.innerText="Applied Students"

    // Active link
    dashboard.classList.remove('active')
    postjob.classList.remove('active')
    applied_stud.classList.add('active')
    profile.classList.remove('active')

    // Remover hover
    dashboard.classList.add('link-hover')
    postjob.classList.add('link-hover')
    applied_stud.classList.remove('link-hover')
    profile.classList.add('link-hover')
})
profile.addEventListener('click',()=>{
    dashboard_content.classList.add('disp-none')
    postjob_content.classList.add('disp-none')
    applied_stud_content.classList.add('disp-none')
    profile_content.classList.remove('disp-none')
    head_Title.innerText="Profile"

    // Active link
    dashboard.classList.remove('active')
    postjob.classList.remove('active')
    applied_stud.classList.remove('active')
    profile.classList.add('active')

    // Remover hover
    dashboard.classList.add('link-hover')
    postjob.classList.add('link-hover')
    applied_stud.classList.add('link-hover')
    profile.classList.remove('link-hover')
})

// Status
const func_status=()=>{ 
    let appl_status_Coll=document.body.getElementsByClassName('app-status')
    let appl_status=Array.from(appl_status_Coll)
    console.log(appl_status)
    appl_status.forEach(element => {
        element.addEventListener("mouseleave",(event)=>{
            if(event.target.value=="Pending"){
                event.target.style.background="white"
                event.target.style.color="black"
            }
            if(event.target.value=="Approved"){
                event.target.style.background="#04AA6D"
                event.target.style.color="white"
            }
            if(event.target.value=="Rejected"){
                event.target.style.background="crimson"
                event.target.style.color="white"
            }
        })
    });
}
func_status()

// adding new entry
let tbodyEl=document.getElementById('table-body')

// test btn;
let testbtn=document.getElementById('Test-btn')
testbtn.addEventListener('click',()=>{
    tbodyEl.insertAdjacentHTML('beforeend',`<tr>
    <td>Ronali</td>
    <td>Computer Sciences</td>
    <td>2025</td>
    <td><a href="">Resume</a></td>
    <td>
        <select class="app-status roboto">
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
        </select>
    </td>
    <td><button class="lock-status .roboto">Lock Status</button></td>
    </tr>
    `)
    func_status()
})