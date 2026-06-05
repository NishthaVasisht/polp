'use client';

import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface NutritionalInfo {
  energy: string;
  fat: string;
  saturatedFat: string;
  carbs: string;
  sugars: string;
  protein: string;
  salt: string;
}

interface NutritionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  info: NutritionalInfo;
}

export function NutritionalModal({ isOpen, onClose, productName, info }: NutritionalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white border-[8px] border-black rounded-none p-8 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
        <DialogHeader className="border-b-4 border-black pb-4 mb-6">
          <DialogTitle className="font-heading text-5xl font-black uppercase tracking-tighter italic">
            TECHNICAL <br /> SPECS // <span className="text-polp-pink">{productName}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 font-mono text-xl font-bold uppercase">
          <div className="flex justify-between border-b-2 border-black/10 pb-2">
            <span>Energy</span>
            <span className="bg-black text-white px-2">{info.energy}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black/10 pb-2">
            <span>Total Fat</span>
            <span>{info.fat}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black/10 pb-2 pl-4 text-black/60">
            <span>- Saturated</span>
            <span>{info.saturatedFat}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black/10 pb-2">
            <span>Carbohydrates</span>
            <span>{info.carbs}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black/10 pb-2 pl-4 text-black/60">
            <span>- Sugars</span>
            <span className="text-polp-pink">{info.sugars}</span>
          </div>
          <div className="flex justify-between border-b-2 border-black/10 pb-2">
            <span>Protein</span>
            <span>{info.protein}</span>
          </div>
          <div className="flex justify-between border-b-4 border-black pb-2">
            <span>Sodium</span>
            <span>{info.salt}</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t-2 border-dashed border-black">
           <p className="font-mono text-xs font-bold text-center opacity-40">
             * PERCENT DAILY VALUES ARE BASED ON A 2,000 CALORIE DIET. <br />
             POLP TECH v4.0.2 // NO LIMITS
           </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
