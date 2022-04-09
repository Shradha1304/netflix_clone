import React,{useState} from 'react';
import { Container,Search,TextLink,Dropdown,Profile,Group,Picture,Link,Feature,Text,FeatureCallOut,Background,Logo,ButtonLink } from './styles/header';
import {Link as ReactRouterLink} from 'react-router-dom';

export default function  Header({bg=true,children,...restProp}){
    return (
        bg?<Background{...restProp}>{children}</Background>:children)
    
}

Header.Feature=function HeaderFeature({children,...restProp}){
   return <Feature{...restProp}>{children}</Feature>

}
Header.FeatureCallOut=function HeaderFeatureCallOut({children,...restProp}){
    return <FeatureCallOut{...restProp}>{children}</FeatureCallOut>
 
 }

 Header.Search=function HeaderSearch({searchTerm,setSearchTerm,...restProp}){
    const [searchActive,setSearchActive]=useState(false);

    
    return <Search {...restProp}>
         <SearchIcon onClick={()=>setSearchActive(setSearchActive=>!searchActive)}>
             <img src="/images/icons/search.png" alt="Search"/>
             <SearchInput value={searchTerm}  onChange={({target})=>setSearchTerm(target.value)}
             placeholder="Search films and series" active={searchActive}/>
         </SearchIcon>
        </Search>
}


 Header.Dropdown=function HeaderDropdown({children,...restProp}){
    return <Dropdown {...restProp}>{children}</Dropdown>
}



Header.Profile=function HeaderProfile({children,...restProp}){
    return <Profile {...restProp}>{children}</Profile>
}
Header.Text=function HeaderText({children,...restProp}){
    return <Link{...restProp}>{children}</Link>
 
 }

 Header.Picture=function HeaderPicture({src,...restProps}){
     return <Picture {...restProps} src={`/images/users/${src}.png`}/>
 }

 Header.Group=function HeaderGroup({children,...restProp}){
    return <Group{...restProp}>{children}</Group>
 
 }

Header.Link=function HeaderLink({children,...restProp}){
    return <Link{...restProp}>{children}</Link>
 
 }

 Header.TextLink=function HeaderTextLink({children,...restProp}){
    return <Link{...restProp}>{children}</Link>
 
 }

Header.Frame=function HeaderFrame({children,...restProp}){
    return <Container{...restProp}>{children}</Container>
}

Header.ButtonLink=function HeaderButtonLink({children,...restProp}){
    return <ButtonLink{...restProp}>{children}</ButtonLink>
}

Header.Logo=function HeaderLogo({to,...restProp}){
    return (
        <ReactRouterLink to={to}>
          <Logo {...restProp}/>
        </ReactRouterLink>
    )
}