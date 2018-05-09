export class QuoteModel {
    _id?: string;
    name: string;
    date: Date;
    comment?: string;
    cost: Cost[] = [];
    gstCost?: number=0;
    totalCost?: number;
    outcome: string;
    email: string;
    tender?: string = ``;
    projectStatus: string = 'Incomplete';
    details?: string = `<p>On behalf of All Paint and Coatings (APC) I am pleased to submit the following quotation for your perusal.&nbsp;</p>
    <p>APC is a locally owned and operated Painting and Decorating contractor who has been working in the Building &amp; Construction industry for over 35 years. We take pride in our work, as well as the responsibility of protecting your asset from future elements.&nbsp;</p>
    <p>Below are just some of the reasons why we feel you should choose APC for your upcoming Painting project;</p>`;
    quoteReason?: string = `<p><span style="font-family: 'times new roman', times;"><strong><u>WHY All Paint &amp; Coatings?</u></strong></span></p>
    <ul>
    <li><span style="font-family: 'times new roman', times;">Uses only premium quality products and materials.</span></li>
    <li><span style="font-family: 'times new roman', times;">Warrants our workmanship and coating applications.</span></li>
    <li><span style="font-family: 'times new roman', times;">Holds all the necessary licences to carry out all works as specified.</span></li>
    <li><span style="font-family: 'times new roman', times;">Clearly specify what work will be carried out. As well as what surface preparation is required to take place and the number of coats of paint that will be applied.</span></li>
    <li><span style="font-family: 'times new roman', times;">We are an approved applicator for all major painting manufacturers.</span></li>
    <li><span style="font-family: 'times new roman', times;">We are WHS compliant and will ensure that our practices and procedures are specifically designed for your project.</span></li>
    <li><span style="font-family: 'times new roman', times;">APC is a locally owned and operated contractor with over 35 years&acirc;&euro;&trade; experience in Painting &amp; Decorating.</span></li>
    <li><span style="font-family: 'times new roman', times;">APC will ensure that you receive the best value for your dollar without compromising on quality</span></li>
    </ul>`;
    scopeDetail?: string = `<p><span style="font-family: 'times new roman', times;"><strong><u>SCOPE OF WORK:</u></strong></span></p>
    <p><span style="font-family: 'times new roman', times;">Preparation and painting of new internal and external substrates;&nbsp;</span></p>
    <p><span style="font-family: 'times new roman', times;">INCLUSIONS:</span></p>
    <ul>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Precast walls internal and external Paint only</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Prepare and paint entry pylon walls</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Paint CFC cladding</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Internal Plasterboard walls</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Ceilings</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Prepare and paint plasterboard ceilings</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Doors and frames</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Internal linemarking only&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">Bollards</span></li>
    <li style="line-height: normal; tab-stops: list 36.0pt;"><span style="font-family: 'times new roman', times;">New tenancy works</span></li>
    </ul>`;
    pricebreakdownHeading: string = 'All works in accordance with Drawings &  Specification supplied';
    pricebreakdownFooter: string = 'Total for supply of material & labour';
    externalSubstrate?: string = `<p><strong><u>PREPARATION OF EXTERNAL SUBSTRATES:</u></strong><br /> All exposed areas will be broomed down to remove excess laitance from the surface. Prior to the application of any coatings, all surfaces will be double checked for any damage. If there is damage the site foreman will be notified.</p>`;
    internalSubstrate: string = `<p><strong><u>PREPARATION OF INTERNAL SUBSTRATES</u>:</strong>  <br /> All areas to be painted will be sanded and swept down to remove excess Latinate from the surface. Prior to the application of any final coatings, surfaces will be check for damage. If additional pre paint is required, the site foreman will be notified to contact the plasterer. Furthermore once final coats have been completed, the McNab site foreman will be notified to sign these areas off. Once the area has been signed off any damage after this period will constitute a variation for rectification. No allowance has been made to rectify poor skirting miters or frame miters due to back workmanship by the builder.</p>`;
}
class Cost {
    heading?: string = "Total for supply of material labour";
    cost: number = 0;
}