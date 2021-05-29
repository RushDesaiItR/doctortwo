import React from 'react';
import jsPDF from 'jspdf'

class Pdf extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={}
    };

    generatePDF = () => {
        var doc = new jsPDF('p', 'pt','a4');
        doc.html(document.querySelector("#invoice"),{
            callback:function(pdf){
               pdf.save("bill.pdf")
            }
        })
        
       
      }   
    
   render() {
       console.log("childData",this.props.childData,this.props.Time, this.props.Date)
      return (
         <div>
            <button onClick={this.generatePDF} style={{ marginLeft:"20px" }} className="add-oppintment" type="primary">Download PDF</button>
            
     
     <div id="invoice" class="invoice-box">
    
			<table>
				<tr class="top">
					<td colspan="2">
						<table>
							<tr>
								

								<td>
									Invoice #: 123<br />
									{this.props.Time}<br />
									{this.props.Date}
								</td>
							</tr>
						</table>
					</td>
				</tr>

				<tr class="information">
					<td colspan="2">
						<table>
							<tr>
								

								<td>
                                    <b>Doctor Details</b>
									{this.props.childData.specality}<br />
									{this.props.childData.firstName}
                                    {this.props.childData.lastName}
                                    <br />
									{this.props.childData.email}
								</td>
							</tr>
						</table>
					</td>
				</tr>
                <tr class="heading">
                    <td>Pataient Name:
                        {this.props.firstName}  {this.props.lastName}
                    </td>
                </tr>
				<tr class="heading">
					<td>Payment Method Online</td>

				</tr>

			

				<tr class="item">
					<td>Doctor Fee $50.00</td>

				</tr>
                <tr class="item">
					<td>Net Doc Fee $5.00</td>
               </tr>
               <tr class="heading">
					<td>Total Fee $55.00</td>
               </tr>

			

				
			</table>
		</div>
       
         </div>
      );
   }
}

export default Pdf;