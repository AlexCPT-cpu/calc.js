import './App.css';
import { Card, Container, Input, Text, Grid, Button } from '@nextui-org/react';
import { useState, useRef } from 'react'

function App() {
  const [math, setmath] = useState(null)
  const [answer, setAnswer] = useState()
  const [inputValue, setInputValue] = useState("")
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const firstInp = useRef(null)
  const secondInp = useRef(null)

  function calculate() {
    const x = Number(firstInp.current.value)
    const y = Number(secondInp.current.value)
    let z = 0
     
    if (math === "+") {
       z = x + y
    }
    else if(math === "-") {
       z = x - y
    }
    else if(math === "*") {
       z = x * y
    }
    else if(math === "/") {
       z = x / y
    }
    else if(math === "%") {
       z = x % y
    }
    setAnswer(z)
    console.log(answer)
  }

  function setInput(value) {
    /*let val = value.toString()
    let input = document.getElementById("firstPut")
    if(math !== null) {
      input = document.getElementById("secondPut")
      input.placeholder = ''
    }
    setInputValue(val.concat(inputValue))
    input.placeholder = inputValue */
    console.log(value)
  }

  return (
  <Container css={{dflex:"center"}}>
    <Card css={{mt:"$4xl"}}>
      <Card.Header>
        <Text h1 weight="bold" size={20} css={{
          textGradient: "45deg, $red600 -20%, $yellow600 50%",
          m:"0 auto"
        }}>
         React Calculator
        </Text>
      </Card.Header>
      <Card.Body>
        <Input id='firstPut' color='primary' type="number" placeholder='0' status='warning' style={{textAlign:"center"}} onChange={calculate} ref={firstInp} clearable />
        <Text h1 weight="bold" size={40} css={{
          textGradient: "45deg, $red600 -20%, $yellow600 50%",
          m:"0 auto",
          mt:"$1"
        }}>
         {math}
        </Text>
        <Input id='secondPut' color='primary' type="number" placeholder='0' status='warning' css={{mt:"$1"}} style={{textAlign:'center'}} onChange={calculate} ref={secondInp} clearable  />
      </Card.Body>
      <Card.Divider />
      <Card.Body>
      <Text h1 weight="bold" size={20} css={{
          textGradient: "45deg, $red600 -20%, $yellow600 50%",
          ta:"right",
        }}>
         = <span style={{marginLeft:"4px"}}>{answer}</span>
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Body>
        <Grid.Container gap={2} justify="center">
          {buttons.map((value, index) => {
            return(
            <Grid key={index}>
              <Button rounded auto bordered color="error" style={{color:"gray"}} value={value} onClick={(e) => setInput(e.target.value)} >
                {value}
                </Button>
            </Grid>
            )
          })
          }
          </Grid.Container>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Grid.Container gap={2} justify="center">
          <Grid xs={2}>
          <Button rounded auto color="error" style={{color:"white"}} value="+" onClick={(e) => setmath(e.target.value)} >
            +
            </Button>
          </Grid>
          <Grid xs={2}>
          <Button rounded auto color="error" style={{color:"white"}} value="-" onClick={(e) => setmath(e.target.value)} >
            -
            </Button>
          </Grid>
          <Grid xs={2}>
          <Button rounded auto color="error" style={{color:"white"}} value="*" onClick={(e) => setmath(e.target.value)} >
            *
            </Button>
          </Grid>
          <Grid xs={2}>
          <Button rounded auto color="error" style={{color:"white"}} value="/" onClick={(e) => setmath(e.target.value)} >
            /
            </Button>
          </Grid>
          <Grid xs={2}>
          <Button rounded auto color="error" style={{color:"white"}} value="%" onClick={(e) => setmath(e.target.value)} >
            %
            </Button>
          </Grid>
          <Grid xs={2}>
          <Button rounded auto color="error" style={{color:"white"}} onClick={calculate} >
            =
            </Button>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
    </Container>
  );
}

export default App;
