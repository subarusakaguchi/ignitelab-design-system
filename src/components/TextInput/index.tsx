import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot'

export interface TextInputEntryProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className='flex items-center gap-3 h-12 py-4 px-3 rounded w-full bg-gray-800 focus-within:ring-2 ring-cyan-600'>
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <>
      <Slot className='w-6 h-6 text-gray-400'>
        {children}
      </Slot>
    </>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputEntry({ ...props }: TextInputEntryProps) {
  return (
    <input
      {...props}
      className='bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'
    />
  )
}

TextInputEntry.displayName = 'TextInput.Entry'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputEntry,
  Icon: TextInputIcon
}
