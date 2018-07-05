# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
    return[
        {
           
        "label":_("Tools"),
        "icon":"octicon octicon-brifcase",
        "items":[
            {
                "type":"doctype",
                "name":"Meeting",
                "lable":_("Meeting"),
                "description":_("Prepare agenda ,invite users and record minutes"),
            },
        ]
            
        }
        
        ]
    