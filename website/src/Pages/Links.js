import '../App.css'
import * as React from 'react';
import MenuBar from '../Components/MenuBar';
import LinkCard from '../Components/LinkCard';
import GitIcon from '../Icons/GitIcon';
import LinkdinIcon from '../Icons/LinkdinIcon';
import ResearchGateIcon from '../Icons/ResearchGateIcon';
import EmailIcon from '../Icons/EmailIcon';

const linkData = [
  { icon: <LinkdinIcon style={{fontSize: 55,}}/>, text: 'Linked In', linkTo: 'www.linkedin.com/in/caleb-eardley-b10045234' },
  { icon: <GitIcon style={{fontSize: 60,}}/>, text: 'Git Hub', linkTo: 'https://github.com/calebtheeardley' },
  { icon: <ResearchGateIcon style={{fontSize: 80,}}/>, text: 'Research Gate', linkTo: 'https://www.researchgate.net/profile/Caleb-Eardley-2' },
  { icon: <EmailIcon style={{fontSize: 60,}}/>, text: 'email', linkTo: 'mailto:caleb.eardley@student.montana.edu' },

];

export default function Links() {

    return(
        <>
            <MenuBar></MenuBar>
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh', 
              }}
            >
              {linkData.map((data, index) => (
                <LinkCard key={index} icon={data.icon} text={data.text} linkTo={data.linkTo} />
              ))}
            </div>
            
        </>
    )
}