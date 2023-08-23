#!/usr/bin/env python
# coding: utf-8

# Copyright (c) kike.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import List, Unicode
from ._frontend import module_name, module_version


class BarWidget(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('BarModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('BarView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    # Your widget state goes here. Make sure to update the corresponding
    # JavaScript widget state (defaultModelProperties) in widget.ts
    data = List().tag(sync=True)
