// Copyright (c) 2018, Asutosh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Meeting Attendee', {
	attendee: function(frm,cdt,cdn) {
		var attendee=frappe.model.get_doc(cdt,cdn);
		if(attendee.attendee){
			frm.call({
				method:"meeting.meeting.doctype.meeting.meeting.get_full_name",
				args:{
					attendee:attendee.attendee
				},
				callback:function(r){
					frappe.model.set_value(cdt,cdn,"full_name",r.message);
				}
			});
		}else{
			//To clear full name if attendess not present
			frappe.model.set_value(cdt,cdn,"full_name",null);
		}
	}

});
