'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'NAME REQUIRED' }),
  email: z.string().email({ message: 'INVALID EMAIL' }),
  message: z.string().min(10, { message: 'TELL US MORE' }),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mojzvyzd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          alert(data['errors'].map((error: any) => error['message']).join(', '));
        } else {
          alert('OOPS! SOMETHING WENT WRONG. TRY AGAIN.');
        }
      }
    } catch (error) {
      alert('CONNECTION FAILED. CHECK YOUR INTERNET AND BLAST IT AGAIN.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center space-y-8 py-20 animate-in fade-in zoom-in duration-500">
        <h3 className="font-heading text-8xl font-black text-center leading-none uppercase italic bg-polp-green text-black px-8 py-4 border-8 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          MESSAGE <br /> RECEIVED. <br /> STAY LOUD.
        </h3>
        <Button 
          onClick={() => setIsSuccess(false)}
          className="bg-black text-white font-heading text-3xl px-12 py-8 rounded-none border-4 border-black hover:bg-polp-pink transition-all"
        >
          SEND ANOTHER
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-16 text-center md:text-left">
         <h2 className="font-heading text-8xl md:text-[10rem] font-black uppercase leading-[0.8] tracking-tighter italic text-white">
           JOIN THE <br /> <span className="bg-polp-yellow text-black px-4">REBELLION.</span>
         </h2>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <Label className="font-heading text-4xl uppercase tracking-tighter text-white">Your Name</Label>
            <Input 
              {...form.register('name')}
              placeholder="WHO ARE YOU?"
              className="bg-white text-black border-8 border-black rounded-none h-24 text-3xl font-bold uppercase placeholder:text-black/20 focus:ring-0 focus:border-polp-blue transition-colors px-6"
            />
            {form.formState.errors.name && (
              <p className="font-mono text-xl font-bold text-polp-pink bg-black px-2 inline-block">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <Label className="font-heading text-4xl uppercase tracking-tighter text-white">Your Email</Label>
            <Input 
              {...form.register('email')}
              placeholder="WHERE DO WE REPLY?"
              className="bg-white text-black border-8 border-black rounded-none h-24 text-3xl font-bold uppercase placeholder:text-black/20 focus:ring-0 focus:border-polp-green transition-colors px-6"
            />
            {form.formState.errors.email && (
              <p className="font-mono text-xl font-bold text-polp-pink bg-black px-2 inline-block">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <Label className="font-heading text-4xl uppercase tracking-tighter text-white">Your Message</Label>
          <Textarea 
            {...form.register('message')}
            placeholder="WHAT&apos;S THE VIBE?"
            className="bg-white text-black border-8 border-black rounded-none min-h-[300px] text-3xl font-bold uppercase placeholder:text-black/20 focus:ring-0 focus:border-polp-pink transition-colors p-6"
          />
          {form.formState.errors.message && (
            <p className="font-mono text-xl font-bold text-polp-pink bg-black px-2 inline-block">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-black text-white hover:bg-polp-blue font-heading text-6xl py-20 font-black uppercase tracking-tighter rounded-none border-8 border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all disabled:opacity-50"
        >
          {isSubmitting ? 'SENDING...' : 'BLAST IT.'}
        </Button>
      </form>
    </div>
  );
}
