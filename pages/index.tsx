import { Button, Radio, RadioGroup, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <RadioGroup onChange={e => console.log(e)}>
        <Stack direction='row'>
          <Radio value={1}>First</Radio>
          <Radio value={2}>Second</Radio>
          <Radio value={3}>Third</Radio>
        </Stack>
      </RadioGroup>
    </div>
  )
}
