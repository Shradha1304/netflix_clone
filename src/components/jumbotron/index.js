import React from 'react';
import { Container,Inner,Item,Title,SubTitle,Pane,Image} from './styles/jumbotron';

export default function Jumbotron({children,direction='row',...restProp}){
  return(
      <Item {...restProp}>
          <Inner direction={direction}>{children}</Inner>
         
      </Item>
  )
}
Jumbotron.Container=function JumbotronContainer({children,...restProp}){
    return <Container {...restProp}>{children}</Container>;
}

Jumbotron.Pane=function JumbotronPane({children,...restProp}){
    return <Pane {...restProp}>{children}</Pane>;
}

Jumbotron.Title=function JumbotronTitle({children,...restProp}){
    return <Title {...restProp}>{children}</Title>;
}

Jumbotron.SubTitle=function JumbotronSubTitle({children,...restProp}){
    return <SubTitle {...restProp}>{children}</SubTitle>;
}

Jumbotron.Image=function JumbotronImage({...restProp}){
    return <Image {...restProp}/>;
}