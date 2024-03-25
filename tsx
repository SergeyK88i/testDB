"use client"
import React from 'react';
import ReactDOM from 'react-dom';
import TopDashboard from '@/app/dashboard/TopDashboard';
import { getAllData } from './DownloadData';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Barchart from './Barchart';

export default async function ListBarchart() {

    const generatePDF = async (post: any) => {
        
        const pdf = new jsPDF('l', 'mm', 'a4', true);
        
        const generateImage = async (data: any) => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            ReactDOM.render(
                <div>
                    <TopDashboard post={data} />
                    {/* <Barchart data={data} /> */}
                </div>,
                    div
            );
            await new Promise(resolve => setTimeout(resolve, 1000));
            const canvas = await html2canvas(div);
            
            div.remove();

            const imgData = canvas.toDataURL('image/png');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 10;

            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.addPage();
        };

        for (let i = 0; i < post.length; i++) {
            await generateImage(post[i]);
        }

        pdf.save('table.pdf');
    };
    const post = await getAllData();
    console.log(post);

    return (
        <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            
            {/* {post.map((data: any, index: any) => (
                <TopDashboard key={index} post={data} />
            ))} */}
            <button onClick={() => generatePDF(post)}>Generate PDF</button>
        </div>
    );
}
