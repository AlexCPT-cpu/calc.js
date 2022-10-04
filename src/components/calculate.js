import React from 'react'

function calculate({x, math, y}) {
  return (
    <div>
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
    </div>
  )
}

export default calculate