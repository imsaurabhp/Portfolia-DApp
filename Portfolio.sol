// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Portfolio{

    address Admin;
    uint8 expCount;
    uint8 projCount;
    uint8 eduCount;

    struct Project{
        string title;
        string desc;
        string imgLink;
        string githubLink;
    }

    struct Education{
        string duration;
        string courseName;
        string institute;
    }

    struct Experience{
        string title;
        string duration;
        string company;
        string shortDesc;
    }

    Experience[5] experiences;
    Project[5] projects;
    Education[2] educationDetails;
    
    modifier onlyAdmin(){
        require(msg.sender == Admin, "Only Admin permitted");
        _;
    }

    constructor(){
        Admin = msg.sender;
    }

    function addExperience(string calldata _title, string calldata _company, string calldata _duration, string calldata _shortDesc) public onlyAdmin{
        require(expCount < 5, "Experiences Limit exceeded");
        experiences[expCount].title = _title;
        experiences[expCount].company = _company;
        experiences[expCount].duration = _duration;
        experiences[expCount].shortDesc = _shortDesc;
        expCount++;
    }

    function changeExperience(uint8 expID, string calldata _title, string calldata _duration, string calldata _company, string calldata _shortDesc) public onlyAdmin{
        require(expID >=0 && expID < 5, "Invalid Experience ID");
        experiences[expID].title = _title;
        experiences[expID].duration = _duration;
        experiences[expID].company = _company;
        experiences[expID].shortDesc = _shortDesc;
    }

    function allExperiences() public view returns(Experience[5] memory){
        return experiences;
    }

    function addProject(string calldata _title, string calldata _desc, string calldata _imgLink, string calldata _githubLink) public onlyAdmin{
        require(projCount < 5, "Projects Limit exceeded");
        projects[projCount].title = _title;
        projects[projCount].desc = _desc;
        projects[projCount].imgLink = _imgLink;
        projects[projCount].githubLink = _githubLink;
        projCount++;
    }

    function changeProject(uint8 _projID, string calldata _title, string calldata _desc, string calldata _imgLink, string calldata _githubLink) public onlyAdmin{
        require(_projID >= 0 && _projID < 5, "Invalid Project ID");
        projects[_projID].title = _title;
        projects[_projID].desc = _desc;
        projects[_projID].imgLink = _imgLink;
        projects[_projID].githubLink = _githubLink;
    }

    function allProjects() public view returns(Project[5] memory){
        return projects;
    }

    function addEducation(string calldata _courseName, string calldata _institute, string calldata _duration) public onlyAdmin{
        require(eduCount < 2, "Educations Limit exceeded");
        educationDetails[eduCount].courseName = _courseName;
        educationDetails[eduCount].institute = _institute;
        educationDetails[eduCount].duration = _duration;
        eduCount++;
    }

    function changeEducation(uint8 _eduID, string calldata _courseName, string calldata _institute, string calldata _duration) public onlyAdmin {
        require(_eduID >= 0 && _eduID < 2, "Invalid Education ID");
        educationDetails[_eduID].duration = _duration;
        educationDetails[_eduID].courseName = _courseName;
        educationDetails[_eduID].institute = _institute;
    }

    function allEducations() public view returns(Education[2] memory) {
        return educationDetails;
    }
}