import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import Logo from './components/Logo';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import './styles/global.css';

export function App() {
  return (
    <main className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading
          size='lg'
          className='mt-4'
        >
          Ignite Lab
        </Heading>

        <Text
          size='lg'
          className='text-gray-400 mt-2'
        >
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10'
      >
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              name='email'
              id='email'
              required
              placeholder='jhondoe@email.com'
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              name='email'
              id='email'
              required
              placeholder='*************'
            />
          </TextInput.Root>
        </label>

        <label
          htmlFor="remember"
          className='flex items-center gap-2'
        >
          <Checkbox id="remember" />
          <Text>Lembrar de mim por 30 dias</Text>
        </label>

        <Button
          type="submit"
          className='mt-4'
        >
          Entrar na plataforma
        </Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild className='bg-transparent text-gray-400 hover:text-gray-200 underline cursor-pointer'>
          <a>Esqueceu sua senha?</a>
        </Text>

        <Text asChild className='bg-transparent text-gray-400 hover:text-gray-200 underline cursor-pointer'>
          <p>Não possui conta? Crie uma agora!</p>
        </Text>
      </footer>
    </main>
  )
}
