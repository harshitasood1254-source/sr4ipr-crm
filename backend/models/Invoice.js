const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  invoiceNumber: { type: String, required: true, unique: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true }, // Foreign key link
  amount: { type: Number, required: true, min: 0 },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Unpaid', 'Paid', 'Overdue'], default: 'Unpaid' }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', InvoiceSchema);