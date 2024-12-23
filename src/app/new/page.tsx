'use client'
import Input from "@/components/input/input";
import Textarea from "@/components/textarea/textarea";
import { NotesContext } from "@/context/noteContext";
import { INote } from "@/interface/note";
import { Highlighter, Image, Link, ListBullets, TextAUnderline, TextBolder, TextItalic, TextUnderline, VideoCamera } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export default function NewNotePage () {
  const [newNote, setNewNote] = useState<INote>({} as INote)
  const { addNewNote } = useContext(NotesContext)

  useEffect(() => {
    addNewNote(newNote)
  }, [newNote])

  return (
      <div className="md:px-[8%] px-6 flex md:flex-nowrap flex-wrap gap-6 py-[60px]">
          <div className="md:w-[70%] w-full flex flex-col gap-4 items-center">
            <Input onChange={(e) => setNewNote({ ...newNote, title: e.target.value, id: !newNote.id ? v4() : newNote.id })} placeholder="Title" className="rounded"/>
            <Textarea onChange={(e) => setNewNote({ ...newNote, text: e.target.value, id: !newNote.id ? v4() : newNote.id })} placeholder="Start typing..." className="h-[400px] py-3 rounded-lg" />
            <div className="grid grid-cols-9 gap-1 p-1 border border-gray-500/[0.1] rounded w-full">
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><TextAUnderline size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><TextBolder size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><TextItalic size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><TextUnderline size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><ListBullets size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><Highlighter size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><Image size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><VideoCamera size={20} /></button>
              <button className="p-2 bg-[#474552]/[0.09] rounded flex justify-center opacity-[0.7]"><Link size={20} /></button>
            </div>
          </div>

          <div className="md:w-[30%] w-full p-4 rounded-lg border border-gray-500/[0.2]">
            <h1>AI Summary</h1>
            <h1>Create Flashcards</h1>
          </div>
      </div>
  )
}