import {jsPDF} from "jspdf";
import html2canvas from 'html2canvas';

const OnClick = () => {
    // html2canvas(document.querySelector("#capture")).then(canvas => {
    //     document.body.appendChild(canvas);  // if you want see your screenshot in body.
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'PNG', 0, 0);
    //     pdf.save("download.pdf");
    // });
    const doc = new jsPDF();
    doc.html('#capture');
    doc.save('sample-file.pdf');
}

const App = () => {
    return (
        <div id={'capture'}>
            <div>111111111111111111111111111111111111111111111111111111111111</div>
            <div>111111111111111111111111111111111111111111111111111111111111</div>
            <div>111111111111111111111111111111111111111111111111111111111111</div>
            <div>111111111111111111111111111111111111111111111111111111111111</div>
            <div>111111111111111111111111111111111111111111111111111111111111</div>
            <button onClick={OnClick}>Click</button>
        </div>
    )
}

export default App;