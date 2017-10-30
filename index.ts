/*information about the courses*/
interface Course{
    name: string;
    description: string;
    gpa: string;
}

/*Information section of Education*/
interface Information{
    school: string; 
    major: Array<string>; 
    minor: Array<string>; 
    cert: Array<string>;
    gpa: number; 
    m_gpa: number; 
}

/*The education section information*/
interface Education{
    info: Information;
    orgs: Array<string>;
    awards: Array<string>;
    courses: Array<Course>;
}

window.onload = function(){
    var info: Information; 
    var education: Education;
    info = {
        school: "University of Pittsburgh", 
        major: ["Computer Science"], 
        minor: ["Chemistry"], 
        cert: null, 
        gpa: 3.537, 
        m_gpa: 3.667
    }; 
    var courses:Array<Course> = createCourses(); 
    education = {
        info: info,
        orgs: ["Pitt Computer Science Club", "Omicron Delta Kappa Honorary Society", "Delta Chi Fraternity"],
        awards: ["Outside the Classroom Curriculum", "Dean's List", "Pitt Advantage Grant"],
        courses: courses
    };
    
    document.getElementById("school").innerHTML = education.info.school;
    document.getElementById("major_blank").innerHTML = education.info.major[0];
    document.getElementById("minor_blank").innerHTML = education.info.minor[0]; 
    document.getElementById("gpa_blank").innerHTML = education.info.gpa.toString();
    document.getElementById("m_gpa_blank").innerHTML = education.info.m_gpa.toString();
    
    var orgs = education.orgs;
    var list = document.getElementById("orgs");
    for(var i = 0; i < orgs.length; i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(orgs[i]));
        list.appendChild(item);
    }
    var awards = education.awards;
    var list = document.getElementById("awards");
    for(var i = 0; i < awards.length; i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(awards[i]));
        list.appendChild(item);
    }
    var course_list = education.courses;
    var list = document.getElementById("courses");
    for(var i = 0; i < course_list.length; i++){
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(course_list[i].name));
        item.className = "course_item"; 
        var item_2 = document.createElement('li');
        item_2.appendChild(document.createTextNode(course_list[i].description));
        var item_3 = document.createElement('li');
        item_3.appendChild(document.createTextNode("Grade: " + course_list[i].gpa));
        var classname = course_list[i].name.split(" ").join("_")
        item_2.className += classname;
        item_2.className += " hide";
        item_2.style.fontStyle = "italic";
        item_3.className += classname;
        item_3.className += " hide";
        item.appendChild(item_2);
        item.appendChild(item_3);
        list.appendChild(item);
    }
};

document.getElementsByTagName("body")[0].addEventListener('click', function(e){
    if(e.srcElement.className == "course_item"){
        var classname = e.srcElement.innerHTML.split("<")[0].split(" ").join("_");
        if((<HTMLElement> document.getElementsByClassName(classname)[0]).style.display === "block"){
            (<HTMLElement> document.getElementsByClassName(classname)[0]).style.display = "none";
            (<HTMLElement> document.getElementsByClassName(classname)[1]).style.display = "none";
        }
        else{
            (<HTMLElement> document.getElementsByClassName(classname)[0]).style.display = "block";
            (<HTMLElement> document.getElementsByClassName(classname)[1]).style.display = "block";
        }
        e.srcElement.childNodes[0]
    }
})
function createCourses(){
    var courses:Array<Course> = new Array();
    var course_list:Array<string> = getCourses(); 
    for(var i = 0; i < course_list.length; i++){
        var course:Course; 
        course = {
            name: course_list[i++],
            description: course_list[i++],
            gpa: course_list[i]
        };
        courses.push(course);
    }
    return courses;
}

function getCourses(){
    var course_list:Array<string> = ["Intermediate Programming with Java",
    "This course is a rigorous introduction to the fundamental concepts and techniques of computer programming using the Java programming language.",
    "A",
    "Discrete Structures for Computer Science",
    "The purpose of this course is to understand and use (abstract) discrete structures that are backbones of computer science. In particular, this class is meant to introduce logic, proofs, sets, relations, functions, counting, and probability, with an emphasis on applications in computer science.",
    "A",
    "Data Structure",
    "This course emphasizes the study of the basic data structures of computer science (stacks, queues, trees, lists, graphs) and their implementations using the Java language. Included in this study are programming techniques which use recursion and reference variables. Students in this course are also introduced to various searching and sorting methods and are also expected to develop an intuitive understanding of the complexity of these algorithms.",
    "B",
    "Computer Organization and Assembly Language",
    "The purpose of this course is to study the components of computing systems common to most computer architectures. In particular, this class is meant to introduce data representation, types of processors (e.g., RISC V. CISC), memory types and hierarchy, assembly language, linking and loading, and an introduction to device drivers.",
    "A-",
    "Introduction to Systems Software",
    "This course will introduce the students to the important systems language, C, and to several topics related to the hardware and software environment. These are issues related to device interfaces and hardware synchronization at the lowest level of the operating system, the linkage of operating system services to application software, and the fundamental mechanisms for computer communications.",
    "A",
    "Algorithm Implementation",
    "This course covers a broad range of the most commonly used algorithms. Some examples include algorithms for sorting, searching, encryption, compression and local search. The students will implement and test several algorithms. The course is programming intensive.",
    "B+",
    "Formal Methods in Computer Science",
    "The goals of the course are to develop student skills in modeling problems using discrete mathematics, to introduce students to new discrete structures, to further develop students' mathematical and algorithmic reasoning skills, and to introduce students to the theoretical study of information and computations as a physical phenomenon. Topics covered will include: discrete mathematics; algorithm analysis, including asymptotic notation, finding run times of iterative programs with nested loops, and using recurrence relations to find run times of recursive programs; and theory of computation, including finite state machines, regular languages, Kleene's Theorem, Church-Turing Thesis, and non-computability of the Halting Problem.",
    "B",
    "Introduction to Operating Systems", 
    "The purpose of this course is to understand and use the basic concepts of operating systems, common to most computer systems, which interfaces the machine with the programmer. In particular, this class is meant to introduce processes such as the processing unit, process management, concurrency, communication, memory management and protection, and file systems.",
    "B",
    "Software Quality Assurance",
    "This course provides students with a broad understanding of modern software testing and quality assurance. Although it will cover testing theory, the emphasis is on providing practical skills in software testing currently used in industry. To that end, it will cover: manual and automated tests, test- driven and behavior-driven development, performance testing, and understanding and developing a testing process. The course is project-oriented, with students working in groups on specific deliverables on various software products, as would be expected in an industry setting.",
    "A",
    "Data Communication and Computer Networks",
    "The course emphasizes basic principles and topics of computer communications. The first part of the course provides an overview of interfaces that interconnect hardware and software components, describes the procedures and rules involved in the communication process and most importantly the software which controls computers communication. The second part of the course discusses network architectures and design principles, and describes the basic protocol suites. The third part of the course introduces the concept of internetworking, a powerful abstraction that deals with the complexity of multiple underlying communication technologies.",
    "TBD",
    "Software Engineering",
    "The purpose of this course is to provide a general survey of software engineering. Some of the topics covered include: project planning and management, design techniques, verification and validation, and software maintenance. Particular emphasis is on a group project in which a group of 2 students implement a system from its specification.",
    "TBD"]
    return course_list;
}

var current;

$(document).ready(function(){
    current = $("#education");
    $("#education_button").click(function(){
        if(current != "#education"){
            $(current).css("display", "none");
            $("#education").css("display", "block");
        }
    });
    $("#work_button").click(function(){
        if(current != "#work"){
            $(current).css("display", "none");
            $("#work").css("display", "block");
            current = $('#work');
        }
    });
});

