import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about_{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }
    function experienceText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat {firstName}_Experience </p>
            <p><span style={{color: info.baseColor}}> TCS <span
                className={Style.green}>(Jul 2022 - CURRENT)</span> $ </span>
                {info.job1}
            </p>
            <p>
            <span
                className={Style.green}>{info.job1desc1} 
                </span>
            </p>
            <li>
                {info.job1datapoint1}
            </li>
            <li>
                {info.job1datapoint2}
            </li>
            <li>
                {info.job1datapoint3}
            </li>
            <li>
                {info.job1datapoint4}
            </li>
            <li>
                {info.job1datapoint5}
            </li>
            <li>
                {info.job1datapoint6}
            </li>
            <p>
            <span
                className={Style.green}>{info.job1desc2} 
                </span>
            </p>
            <li>
                {info.job1data1}
            </li>
            <li>
                {info.job1data2}
            </li>
            <li>
                {info.job1data3}
            </li>
            <li>
                {info.job1data4}
            </li>
            <p><span style={{color: info.baseColor}}> BUCKMAN <span
                className={Style.green}>(Dec 2021 - Jun2022)</span> $ </span>
                {info.job2}
            </p>
            <li>
                {info.job2datapoint1}
            </li>
            <li>
                {info.job2datapoint2}
            </li>
            <li>
                {info.job2datapoint3}
            </li>
            <p><span style={{color: info.baseColor}}> ARAVIND EYE HOSPITAL <span
                className={Style.green}>(Jun 2020 - Nov 2020)</span> $ </span>
                {info.job3}
            </p>
            <li>
                {info.job3datapoint1}
            </li>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }
    function certificationsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                achievements/certifications</p>
            <p><span style={{color: info.baseColor}}>achievements/certifications <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.certifications.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={experienceText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={certificationsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}